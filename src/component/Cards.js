import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ stars }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="recipe">
            ⭐
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={stars.name}
        subheader={stars.birth_year}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7xzwp0a3Euuy4ktLam8YQvadPeZa75Oq6w&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <span>
              Gender :
              <Typography sx={{ color: "info.main" }}>
                {stars.gender}
              </Typography>
            </span>

            <span>
              Height :
              <Typography sx={{ color: "info.main" }}>
                {stars.height}
              </Typography>
            </span>

            <span>
              Mass :
              <Typography sx={{ color: "info.main" }}>{stars.mass}</Typography>{" "}
            </span>

            <span>
              Hair Color :
              <Typography sx={{ color: "info.main" }}>
                {stars.hair_color}
              </Typography>{" "}
            </span>
          </div>
          <div>
            <span>
              Eye Color :
              <Typography sx={{ color: "info.main" }}>
                {stars.eye_color}
              </Typography>
            </span>
            <br />
            <span>
              Skin Color :
              <Typography sx={{ color: "info.main" }}>
                {stars.skin_color}
              </Typography>
            </span>
            <br />
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <Typography paragraph sx={{ color: "primary.main" }}>
      Home World
      </Typography>
      {stars?.homeworld}
        
    </CardContent>
        <CardContent>
          <Typography paragraph sx={{ color: "primary.main" }}>
            StarShips
          </Typography>
          {stars?.starships?.map((item) => {
            return <Typography>{item}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
