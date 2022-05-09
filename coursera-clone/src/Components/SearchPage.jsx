import { Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchedData, toggleLoading } from "../Searchdata/action";
export const SearchPage = () => {
  let [data, setData] = useState([]);
  const dispatch = useDispatch();
  let [subject, setSubject] = useState([]);
  let [level, setLevel] = useState([]);
  let [duration, setDuration] = useState([]);
  let [skill, setSkill] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch(toggleLoading(true));
    axios
      .get("https://courseera-backend-api.herokuapp.com/search")
      .then((res) => {
        dispatch(toggleLoading(false));

        setData([...res.data]);
        // dispatch(searchedData(res.data));
      });
  };
  const loading = useSelector((store) => store.loading);

  const getdata = useSelector((store) => store.data);
  // console.log(getdata);

  let { name } = useParams();
  //Subject Sorting
  const handleSubject = (e) => {
    let { checked, value } = e.target;
    if (checked) {
      setSubject([...subject, value]);
    } else {
      let update = [];
      for (let i = 0; i < subject.length; i++) {
        if (subject[i] == value) {
          continue;
        } else {
          update.push(subject[i]);
        }
      }
      setSubject([...update]);
    }
  };
  const handleLevel = (e) => {
    let { checked, value } = e.target;
    if (checked) {
      setLevel([...level, value]);
    } else {
      let update = [];
      for (let i = 0; i < level.length; i++) {
        if (level[i] == value) {
          continue;
        } else {
          update.push(level[i]);
        }
      }
      setLevel([...update]);
    }
  };
  const handleDuration = (e) => {
    let { checked, value } = e.target;
    if (checked) {
      setDuration([...duration, value]);
    } else {
      let update = [];
      for (let i = 0; i < duration.length; i++) {
        if (duration[i] == value) {
          continue;
        } else {
          update.push(duration[i]);
        }
      }
      setDuration([...update]);
    }
  };
  const handleSkill = (e) => {
    let { checked, value } = e.target;
    if (checked) {
      setSkill([...skill, value]);
    } else {
      let update = [];
      for (let i = 0; i < skill.length; i++) {
        if (skill[i] == value) {
          continue;
        } else {
          update.push(skill[i]);
        }
      }
      setSkill([...update]);
    }
  };

  const handleSingle = (item) => {
    console.log(item);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid transparent",
          marginTop: "20px",
          marginTop: "45px",
        }}
      >
        <Grid item xs={12} md={3} sx={{ border: "1px solid transparent" }}>
          <h3>Filter By:</h3>
          <h4>Subject</h4>
          <label>
            <input
              type="checkbox"
              value={"Information Technology"}
              onClick={(e) => {
                handleSubject(e);
              }}
            />
            Information Technology
          </label>
          <label>
            <input
              type="checkbox"
              value={"Business"}
              onClick={(e) => {
                handleSubject(e);
              }}
            />
            Business
          </label>
          <label>
            <input
              type="checkbox"
              value={"Data Science"}
              onClick={(e) => {
                handleSubject(e);
              }}
            />
            Data Science
          </label>
          <label>
            <input
              type="checkbox"
              value={"Computer Science"}
              onClick={(e) => {
                handleSubject(e);
              }}
            />
            Computer Science
          </label>
          <h4>Levels</h4>
          <label>
            <input
              type="checkbox"
              value={"Beginner"}
              onClick={(e) => {
                handleLevel(e);
              }}
            />
            Beginner
          </label>
          <label>
            <input
              type="checkbox"
              value={"Intermediate"}
              onClick={(e) => {
                handleLevel(e);
              }}
            />
            Intermediate
          </label>
          <label>
            <input
              type="checkbox"
              value={"Advanced"}
              onClick={(e) => {
                handleLevel(e);
              }}
            />
            Advanced
          </label>
          <label>
            <input
              type="checkbox"
              value={"Mixed"}
              onClick={(e) => {
                handleLevel(e);
              }}
            />
            Mixed
          </label>
          <h4>Duration</h4>
          <label>
            <input
              type="checkbox"
              value={"2 Hours"}
              onClick={(e) => {
                handleDuration(e);
              }}
            />
            2 Hours
          </label>
          <label>
            <input
              type="checkbox"
              value={"1-4 Weeks"}
              onClick={(e) => {
                handleDuration(e);
              }}
            />
            1-4 Weeks
          </label>
          <label>
            <input
              type="checkbox"
              value={"1-3 Months"}
              onClick={(e) => {
                handleDuration(e);
              }}
            />
            1-3 Months
          </label>
          <label>
            <input
              type="checkbox"
              value={"3+ Months"}
              onClick={(e) => {
                handleDuration(e);
              }}
            />
            3+ Months
          </label>
          <h4>Skills</h4>
          <label>
            <input
              type="checkbox"
              value={"Computer Programming"}
              onClick={(e) => {
                handleSkill(e);
              }}
            />
            Computer Programming
          </label>
          <label>
            <input
              type="checkbox"
              value={"Database Design"}
              onClick={(e) => {
                handleSkill(e);
              }}
            />
            Database Design
          </label>
          <label>
            <input
              type="checkbox"
              value={"Algorithms"}
              onClick={(e) => {
                handleSkill(e);
              }}
            />
            Algorithms
          </label>
          <label>
            <input
              type="checkbox"
              value={"Computer Networking"}
              onClick={(e) => {
                handleSkill(e);
              }}
            />
            Computer Networking
          </label>
        </Grid>
        <Grid item xs={12} md={8} sx={{ border: "1px solid transparent" }}>
          {loading ? (
            <CircularProgress sx={{ marginTop: "50px", marginLeft: "50%" }} />
          ) : (
            <>
              {data
                .filter((e) => {
                  if (e.language == name) {
                    return true;
                  }
                })
                .filter((e) => {
                  if (subject.length == 0) {
                    return true;
                  }
                  if (subject.includes(e.subject)) {
                    return true;
                  }
                })
                .filter((e) => {
                  if (level.length == 0) {
                    return true;
                  }

                  if (level.includes(e.level)) {
                    return true;
                  }
                })
                .filter((e) => {
                  if (duration.length == 0) {
                    return true;
                  }

                  if (duration.includes(e.duration)) {
                    return true;
                  }
                })
                .filter((e) => {
                  if (skill.length == 0) {
                    return true;
                  }

                  if (skill.includes(e.skill)) {
                    return true;
                  }
                }).length == 0 ? (
                <img
                  src="https://previews.123rf.com/images/goodjane/goodjane1902/goodjane190200031/116711775-hand-drawn-404-error-banner-vector-illustration-students-learning-near-a-big-banner-can-be-used-as-a.jpg"
                  alt="Not Found"
                  style={{
                    width: "60%",
                    height: "80%",
                    objectFit: "cover",
                    marginLeft: "25%",
                  }}
                />
              ) : (
                data
                  .filter((e) => {
                    if (e.language == name) {
                      //  console.log(e.language);
                      return true;
                    }
                  })
                  .filter((e) => {
                    if (subject.length == 0) {
                      return true;
                    }

                    if (subject.includes(e.subject)) {
                      return true;
                    }
                  })
                  .filter((e) => {
                    if (level.length == 0) {
                      return true;
                    }

                    if (level.includes(e.level)) {
                      return true;
                    }
                  })
                  .filter((e) => {
                    if (duration.length == 0) {
                      return true;
                    }

                    if (duration.includes(e.duration)) {
                      return true;
                    }
                  })
                  .filter((e) => {
                    if (skill.length == 0) {
                      return true;
                    }

                    if (skill.includes(e.skill)) {
                      return true;
                    }
                  })
                  .map((item, i) => {
                    return (
                      <div
                        onClick={({ item }) => {
                          handleSingle(item);
                        }}
                        className="subdiv"
                        key={i}
                        style={{
                          display: "flex",
                          margin: "5px",
                          flexWrap: "wrap",
                          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        }}
                      >
                        <img
                          src={item.imageurl}
                          style={{ width: "150px", height: "150px" }}
                        />
                        <div
                          className="contentContainer"
                          style={{ lineHeight: "1.5px", marginLeft: "5px" }}
                        >
                          <Link to={`/${item._id}`}>
                            {" "}
                            <h3
                              onClick={({ item }) => {
                                handleSingle(item);
                              }}
                              style={{ lineHeight: "18px" }}
                            >
                              {item.title}
                            </h3>{" "}
                          </Link>
                          <p style={{ color: "grey" }}>{item.place}</p>
                          <h4>{item.coursetype}</h4>
                          <p>
                            ⭐{item.ratings}|{item.students}
                          </p>
                          <h4>{item.level}</h4>
                        </div>
                      </div>
                    );
                  })
              )}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};
