'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Container
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface NavigationButton {
    label: string
    href: string
}

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const navigationButtons: NavigationButton[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Users', href: '/users' },
    ]

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <List>
            {navigationButtons.map((item) => (
                <ListItem key={item.label} disablePadding>
                    <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
                        <ListItemButton>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            Logo
                        </Typography>
                        
                        {/* Desktop menu */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navigationButtons.map((item) => (
                                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        
                        {/* Mobile menu button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile drawer */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}