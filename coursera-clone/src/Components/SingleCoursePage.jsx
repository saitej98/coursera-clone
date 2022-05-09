import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toggleLoading } from "../Searchdata/action";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export const SingleProductPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const handleclick = () => {
    return navigate("/payment");
  };

  const [obj, SetData] = useState({});
  const getData = () => {
    dispatch(toggleLoading(true));
    axios
      .get(`https://courseera-backend-api.herokuapp.com/search/${id}`)
      .then((res) => {
        dispatch(toggleLoading(false));
        SetData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress sx={{ marginTop: "100px", marginLeft: "50%" }} />
      ) : (
        <>
          <Grid
            container
            spacing={2}
            sx={{
              border: "1px solid transparent",
              marginTop: "45px",
              backgroundColor: "#165da4",
            }}
          >
            <Grid
              item
              xs={12}
              md={7}
              sx={{ border: "1px solid transparent", color: "white" }}
            >
              <p>
                Browse {`>`} Computer Scince {`>`} Mobile and Web Development
              </p>
              <h2 style={{ marginTop: "70px" }}>{obj.title}</h2>
              <p>
                Build Complete Web and Hybrid Mobile Solutions. Master front-end
                web, hybrid mobile app and server-side development in three
                comprehensive courses.
              </p>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#a78337",
                  color: "white",
                  border: "none",
                }}
                onClick={handleclick}
              >
                Enroll Now
              </button>{" "}
              <span>Rs.3899</span>
              <p>38,781 students already enrolled</p>
              <h3>About:</h3>
              <p>{obj.about1}</p>
              <p>{obj.about2}</p>
              <p>{obj.about3}</p>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ border: "1px solid transparent", color: "white" }}
            >
              <h4 style={{ marginTop: "70px" }}>{obj.place}</h4>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
