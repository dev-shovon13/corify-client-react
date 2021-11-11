import * as React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import useAuth from '../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Payment from './Payment/Payment';
import DashHome from './DashHome';
import NewProduct from '../NewProduct/NewProduct'
import UserRating from './UserRating/UserRating';
import AllOrders from '../AllOrders/AllOrders';
import ManageProduct from './ManageProduct/ManageProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import logo from '../../images/logo.png'
import userAvatar from '../../images/avatar.png'

// import AdminRoute from './../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Link to="/home">
                <Toolbar >
                    <img src={logo} height="40" width="130" alt="" />
                </Toolbar>
            </Link>
            <Divider />
            <List>
                {/* user part  */}
                <Link to={`${url}`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItem>
                </Link>
                <Link to={`${url}/payment`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payment" />
                    </ListItem>
                </Link>
                <Link to={`${url}/rating`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <RateReviewIcon />
                        </ListItemIcon>
                        <ListItemText primary="Review" />
                    </ListItem>
                </Link>
                {/* admin part  */}
                <Link to={`${url}/allOrders`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage All Orders" />
                    </ListItem>
                </Link>
                <Link to={`${url}/addNew`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add a Product" />
                    </ListItem>
                </Link>
                <Link to={`${url}/makeAdmin`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <AdminPanelSettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Make Admin" />
                    </ListItem>
                </Link>
                <Link to={`${url}/manageProduct`} className="text-decoration-none text-secondary">
                    <ListItem button>
                        <ListItemIcon>
                            <DirectionsCarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Products" />
                    </ListItem>
                </Link>

                {/* common part  */}
                {/* <Link to="/home" className="text-decoration-none text-secondary">
                    <ListItem button onClick={logOut}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </Link> */}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-white text-secondary">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {
                        user.displayName || user.email ?
                            <div className="d-flex ms-auto">
                                <div className="d-flex align-items-center justify-content-center">
                                    {user.photoURL ?
                                        <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                        :
                                        <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                    {user.displayName ?
                                        <span className="fw-bold text-dark">{user.displayName}</span>
                                        :
                                        <span className="fw-bold text-dark">{user.email.substring(0, user.email.lastIndexOf("@"))}</span>}
                                    <Button onClick={logOut} variant="contained" size="small" className="banner-btn text-capitalize ms-2 text-white bg-danger rounded-0">
                                        <LoginIcon /><span className="ms-2">Logout</span>
                                    </Button>
                                </div>
                            </div>
                            : ''
                    }
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders />
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route exact path={`${path}/rating`}>
                        <UserRating />
                    </Route>
                    <Route exact path={`${path}/allOrders`}>
                        <AllOrders />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/addNew`}>
                        <NewProduct />
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute> */}
                </Switch>
            </Box>
        </Box>
    );
}
export default Dashboard;
