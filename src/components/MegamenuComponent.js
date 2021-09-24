import React from "react";
import { makeStyles } from "@mui/styles";
import { Popover } from "@mui/material";
import { Container } from "react-bootstrap";
import ProductItemsComponent from "./ProductItemsComponent";
import Button from "@restart/ui/esm/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: "65vh",
    border: "none",
    boxShadow: "none",
    backgroundColor: "#232F3E",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default function MegamenuComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };




  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <a
        aria-describedby={id}
        href="#product"
        role="button"
        onMouseOver={handleClick}
        className="nav-link"
        id="basic-nav-dropdown"
      >
        Products
      </a>
      <Container>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          className="mt-2 popper"
          onClose={handleClick}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
      
        >
          <div className={classes.paper}>
              <Button onClick={handleClick} className="close-button"><i class="icofont-close icofont-1x"></i></Button>
            <ProductItemsComponent/>
          </div>
        </Popover>
      </Container>
    </div>
  );
}
