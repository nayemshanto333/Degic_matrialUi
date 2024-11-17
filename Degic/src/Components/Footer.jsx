import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  const FootData = [
    {
      Title: "Home",
      lInks: ["Become Affiliate", "Go Unlimited", "Services"],
    },
    {
      Title: "Products",
      lInks: [
        "Design Systems",
        "Themes & Templates",
        "Mockups",
        "Presentations",
        "Wireframes Kits",
        "UI Kits ",
      ],
    },
    {
      Title: "Legals",
      lInks: ["License", "Refund Policy", "About Us", "Contacts"],
    },
    {
      Title: "Blog",
      lInks: ["Business Stories", "Digital Store", "Learning", "Social Media"],
    },
  ];

  const Social = [
    { icon: <Facebook />, href: "www.facebook.com" },
    { icon: <Twitter />, href: "www.twitter.com" },
    { icon: <Instagram />, href: "www.instagram.com" },
  ];

  return (
    <Box sx={{ backgroundColor: "#000", color: "white", pt:8,pb:1, px:6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{justifyContent:"space-between"}}>
          <Grid item sx={12} md={3}>
            <Typography>
              <img src="/logo2.png" alt="logo" />
            </Typography>
          </Grid>
          {FootData.map((section, index) => (
            <Grid sx={{my:2, px:3}}>
              <Typography>{section.Title}</Typography>
              {section.lInks.map((link, linkIndex) => (
                <Box key={linkIndex}>
                  <Link
                    href="#"
                    underline="none"
                    color="gray"
                    display="block"
                    sx={{ my: 1 }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
        <hr className="text-gray-500 mt-4 mb-2"/>
        <Box display={"flex"} justifyContent='space-between'  >
          <Typography sx={{color:'gray', mt:2, fontSize:"14px"}}>
            ©{new Date().getFullYear()} Degic. All Rights Reserved.
          </Typography>
          <Box >
            {Social.map((icon, index)=>(
              <IconButton >
                <Link   key={index} href={Social.href} >{icon.icon}</Link>
              </IconButton>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
