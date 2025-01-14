import * as React from 'react';
import {useState} from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, {listItemButtonClasses} from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link, useLocation} from 'react-router-dom';
import ColorSchemeToggle from '../components/ColorSchemeToggle.jsx';
import {closeSidebar} from '../utils.js';

// eslint-disable-next-line react/prop-types
function Toggles({defaultExpanded = false, renderToggle, children,}) {
    const [open, setOpen] = useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({open, setOpen})}
            <Box
                sx={[{
                    display: 'grid',
                    transition: '0.2s ease',
                    '& > *': {overflow: 'hidden',},
                }, open ? {gridTemplateRows: '1fr'} : {gridTemplateRows: '0fr'},]}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

export default function Sidebar() {
    const {pathname} = useLocation();
    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {xs: 'fixed', md: 'sticky'},
                transform: {xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))', md: 'none',},
                transition: 'transform 0.4s, width 0.4s', zIndex: 10000, height: '100dvh',
                width: 'var(--Sidebar-width)', top: 0, p: 2, flexShrink: 0, display: 'flex',
                flexDirection: 'column', gap: 2, borderRight: '1px solid', borderColor: 'divider',
            }}
        >
            <GlobalStyles styles={(theme) => ({
                ':root': {'--Sidebar-width': '220px', [theme.breakpoints.up('lg')]: {'--Sidebar-width': '240px'}}
            })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed', zIndex: 9998, top: 0, left: 0, width: '100vw', height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)', backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                <IconButton variant="soft" color="primary" size="sm">
                    <BrightnessAutoRoundedIcon/>
                </IconButton>
                <Typography level="title-lg">Chat</Typography>
                <ColorSchemeToggle sx={{ml: 'auto'}}/>
            </Box>
            <Input size="sm" startDecorator={<SearchRoundedIcon/>} placeholder="Search"/>
            <Box
                sx={{
                    minHeight: 0, overflow: 'hidden auto', flexGrow: 1, display: 'flex', flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {gap: 1.5},
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1, '--List-nestedInsetStart': '30px', '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem>
                        <ListItemButton selected={pathname === '/'} role="menuitem" component={Link} to={'/'}>
                            <DashboardIcon/>
                            <ListItemContent>
                                <Typography level="title-sm">Dashboard</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem nested>
                        <Toggles
                            defaultExpanded={pathname.startsWith('/orders')}
                            renderToggle={({open, setOpen}) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <ShoppingCartRoundedIcon/>
                                    <ListItemContent>
                                        <Typography level="title-sm">Orders</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={[open ? {transform: 'rotate(180deg)',} : {transform: 'none',},]}>
                                    </KeyboardArrowDownIcon>
                                </ListItemButton>
                            )}
                        >
                            <List sx={{gap: 0.5}}>
                                <ListItem sx={{mt: 0.5}}>
                                    <ListItemButton selected={pathname === '/orders'} component={Link} to={'/orders'}>All tasks</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggles>
                    </ListItem>
                    <ListItem>
                        <ListItemButton role="menuitem" component={Link} to={'/dashboard'}>
                            <QuestionAnswerRoundedIcon/>
                            <ListItemContent>
                                <Typography level="title-sm">Messages</Typography>
                            </ListItemContent>
                            <Chip size="sm" color="primary" variant="solid">4</Chip>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List size="sm" sx={{
                    mt: 'auto', mb: 2, flexGrow: 0,
                    '--ListItem-radius': (theme) => theme.vars.radius.sm, '--List-gap': '8px',
                }}
                >
                    <ListItem>
                        <ListItemButton>
                            <SettingsRoundedIcon/>
                            Settings
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Divider/>
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                <Avatar variant="outlined" size="sm"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"/>
                <Box sx={{minWidth: 0, flex: 1}}>
                    <Typography level="title-sm">Satirist K.</Typography>
                    <Typography level="body-xs">siriwatk@test.com</Typography>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral">
                    <LogoutRoundedIcon/>
                </IconButton>
            </Box>
        </Sheet>
    );
}
