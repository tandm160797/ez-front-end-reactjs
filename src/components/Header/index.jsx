import Register from '$features/Auth/components/Register';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const Header = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
					<Button onClick={handleClickOpen} color="inherit">
						Đăng ký
					</Button>
				</Toolbar>
			</AppBar>
			<Dialog
				disableEscapeKeyDown
				disableBackdropClick
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<Register />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Hủy
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Header;
