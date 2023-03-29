import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Typography, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function Content() {
  return (
    <Grid direction="column">
      <Box>
        <Typography mb={3} variant="h4">Welcome to My Website</Typography>
        <Typography mb={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          quaerat voluptatum obcaecati sed. Corrupti officia odit nobis
          quibusdam praesentium voluptates voluptatem eaque perspiciatis
          expedita inventore, similique nemo dolore, repellendus eveniet
          reiciendis est asperiores! Natus hic totam porro dolorum animi,
          perferendis omnis.
        </Typography>
        <Typography mb={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          accusamus laudantium sequi corrupti inventore suscipit dignissimos
          labore, asperiores id. Minima non voluptate nulla quam, necessitatibus
          fugiat dolor quod iste, perspiciatis eos doloribus libero labore
          facilis deserunt architecto aut. 
        </Typography>
      </Box>


      <Grid container spacing={1}>
        <Grid item sx={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNdQGongJU7N6IocfvKpapeWqBcLp_UghSQ&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, illo ipsum eaque autem labore fugiat suscipit.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNdQGongJU7N6IocfvKpapeWqBcLp_UghSQ&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde voluptate porro beatae numquam maxime ab.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sx={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNdQGongJU7N6IocfvKpapeWqBcLp_UghSQ&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam rem beatae provident cupiditate ratione neque voluptate?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Content;
