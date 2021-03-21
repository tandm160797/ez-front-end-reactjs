import Login from '$features/Auth/components/Login';
import Register from '$features/Auth/components/Register';
import { logout } from '$redux-toolkit/slice/userSlice';
import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const MODE = {
	LOGIN: 'login',
	REGISTER: 'register'
};

const Header = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const loginedUser = useSelector((state) => state.user.current);

	const isLoginedUser = !!loginedUser._id;

	const [open, setOpen] = useState(false);

	const [mode, setMode] = useState(MODE.LOGIN);

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpenMenu = (evt) => {
		setAnchorEl(evt.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		handleCloseMenu();
		const action = logout();
		dispatch(action);
	};

	return (
		<div className={classes.header}>
			<AppBar position="static">
				<Toolbar>
					<HomeIcon className={classes.menuButton} />
					<Typography variant="h6" className={classes.title}>
						<Link className={classes.navLink} to="/">
							Shopping
						</Link>
					</Typography>
					<NavLink className={classes.navLink} to="/count">
						<Button color="inherit">Count</Button>
					</NavLink>
					<NavLink className={classes.navLink} to="/magic-box">
						<Button color="inherit">Magic Box</Button>
					</NavLink>
					{!isLoginedUser && (
						<Button onClick={handleClickOpen} color="inherit">
							Đăng nhập
						</Button>
					)}
					{isLoginedUser && (
						<IconButton color="inherit" onClick={handleOpenMenu}>
							<AccountCircle />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>

			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={!!anchorEl}
				onClose={handleCloseMenu}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				getContentAnchorEl={null}
			>
				<MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
				<MenuItem onClick={handleCloseMenu}>My account</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>

			<Dialog disableEscapeKeyDown disableBackdropClick open={open} aria-labelledby="form-dialog-title">
				<DialogContent>
					{mode === MODE.REGISTER && (
						<>
							<Register closeDialog={handleClose} />
							<Box textAlign="center">
								<Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
									Bạn đã có tài khoản? Đăng nhập
								</Button>
							</Box>
						</>
					)}
					{mode === MODE.LOGIN && (
						<>
							<Login closeDialog={handleClose} />
							<Box textAlign="center">
								<Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
									Bạn chưa có tài khoản? Đăng ký
								</Button>
							</Box>
						</>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Header;
