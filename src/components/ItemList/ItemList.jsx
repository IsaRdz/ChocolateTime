import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.vars.palette.text.tertiary,
  }));

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        margin: "0 auto",
        justifyContent: "center",
        padding: "4vh 4vw",
        backgroundColor: "blanchedalmond",
      }}
    >
      {data?.map((product) => (
        <Grid
          xs={12}
          sm={6}
          md={4}
          xl={3}
          sx={{ display: "flex", justifyContent: "center" }}
          key={product.id}
        >
          <Card
            variant="outlined"
            sx={{
              width: 320,
              "&:hover": { boxShadow: "1px 1px 6px gray" },
            }}
          >
            <Typography level="h2" fontSize="lg" sx={{ mb: 0.5 }}>
              {product.title}
            </Typography>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
              <img
                src={product.img}
                srcSet={product.img}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <Typography level="body2" sx={{ mb: 1.5 }}>
              {product.description}{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography level="body3">Precio (100 gr.):</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  ${product.price}
                </Typography>
              </div>
              <Link to={`/itemDetail/${product.id} `}>
                <Button
                  variant="solid"
                  size="sm"
                  color="success"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 600 }}
                >
                  Ver más
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
