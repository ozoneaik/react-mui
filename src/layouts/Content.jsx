import {CssVarsProvider} from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "@mui/joy/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

// eslint-disable-next-line react/prop-types
function Content({children,pathMain = 'Main',pathSecond = 'Second',headTitle = 'HeadTitle'}) {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline/>
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                <Header/>
                <Sidebar/>
                <Box component="main" className="MainContent"
                     sx={{
                         px: {xs: 2, md: 6}, pb: {xs: 2, sm: 2, md: 3}, flex: 1, display: 'flex',
                         flexDirection: 'column', minWidth: 0, height: '100dvh', gap: 1,
                         pt: {xs: 'calc(12px + var(--Header-height))', sm: 'calc(12px + var(--Header-height))', md: 3,},
                     }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Breadcrumbs
                            size="sm" aria-label="breadcrumbs" sx={{pl: 0}}
                            separator={<ChevronRightIcon fontSize="sm"/>}
                        >
                            <Link underline="none" color="neutral" to={'#'} aria-label="Home">
                                <HomeRoundedIcon/>
                            </Link>
                            <Link underline="hover" color="neutral" to={'#'} sx={{fontSize: 12, fontWeight: 500}}>
                                {pathMain}
                            </Link>
                            <Typography color="primary" sx={{fontWeight: 500, fontSize: 12}}>{pathSecond}</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box sx={{
                        display: 'flex', mb: 1, gap: 1, flexDirection: {xs: 'column', sm: 'row'},
                        alignItems: {xs: 'start', sm: 'center'}, flexWrap: 'wrap', justifyContent: 'space-between',
                    }}>
                        <Typography level="h2" component="h1">{headTitle}</Typography>
                        <Button color="primary" startDecorator={<DownloadRoundedIcon/>} size="sm">Download PDF</Button>
                    </Box>
                    {/*  Content  */}
                    {children}
                    {/*  End Content  */}
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

export default Content;