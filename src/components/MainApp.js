import "../App.css"
import React, { useState, useEffect } from "react";

import { filterToObj } from "../utils/functions"

const MainApp = ({ functionRef }) => {

    const [result, setResult] = useState(null)
    const [followers, selectFollowers] = useState(null)
    const [following, selectFollowing] = useState(null)

    const [error, setError] = useState('')

    const disabler = React.createRef();
    const inputFollowers = React.createRef();
    const inputFollowing = React.createRef();

    const filterUsers = async () => {

        if (followers && following) {

            const followersObj = await filterToObj(followers)
            const followingObj = await filterToObj(following)
            const result = {}

            Object.keys(followingObj).forEach((key) => {
                if (followersObj[key] !== "") {
                    const username = key.replace("https://www.instagram.com/", "@")
                    result[username] = key
                }
            })

            setResult(result)
            disabler.current.className = 'disabler';
        } else {
            setError("Please provide all the files required!")
        }
    }

    const onInputClick = (event) => {
        event.target.value = ''
    }


    useEffect(() => {

        if (followers && followers.name !== "followers_1.html") {
            selectFollowers(null)
            setError("Wrong file for the Followers selected!")
            inputFollowers.current.className = 'button-label';
        }


        if (following && following.name !== "following.html") {
            selectFollowing(null)
            setError("Wrong file for the Following selected!")
            inputFollowing.current.className = 'button-label';
        }
    }, [followers, following, inputFollowers, inputFollowing])

    const cleanUp = () => {
        setError("")
        selectFollowers(null)
        selectFollowing(null)
        setResult(null)
        disabler.current.className = '';
        inputFollowers.current.className = 'button-label';
        inputFollowing.current.className = 'button-label';
        inputFollowers.current.value = null;
        inputFollowing.current.value = null;
    }

    return (
        <div className="form-center">

            <h1 className="title"> UNFOLLOWED </h1>
            <div className="help_box">
                <input value="HELP" className="help" type="submit" onClick={() => functionRef(true)} />
            </div>
            <div className="" ref={disabler}>

                <div className="input-files-column">

                    <form>
                        <div>
                            <label className="button-label" htmlFor="followers" ref={inputFollowers}>INSERT FOLLOWERS FILE</label>
                            <input value={''} className="input-file" type="file" name="followers" id="followers" accept=".html"
                                onChange={(e) => {
                                    setError("")
                                    selectFollowers(e.target.files[0])
                                    inputFollowers.current.className = 'active';
                                }}
                                onClick={onInputClick}
                            />
                        </div>
                    </form>

                    <form>
                        <div>
                            <label className="button-label" htmlFor="following" ref={inputFollowing}>INSERT FOLLOWING FILE</label>
                            <input value={''} className="input-file" type="file" name="following" id="following" accept=".html"
                                onChange={(e) => {
                                    setError("")
                                    selectFollowing(e.target.files[0])
                                    inputFollowing.current.className = 'active';
                                }}
                                onClick={onInputClick}
                            />
                        </div>
                    </form>
                </div>

                <input disabled={result} value="SEARCH" className="submit-button" type="submit" onClick={filterUsers} />

            </div>

            {error ? <h1 className="error-label">{error}</h1> : <></>}

            {
                result && <input value="Clear Search" className="clear-search" type="submit" onClick={cleanUp} />
            }

            {
                result ? (
                    <div className="background-enforcer">
                        <h1 className="result-header"> Users found! </h1>
                        {Object.keys(result).map((it, index) => {
                            return (
                                <React.Fragment key={`${it}-${index}`}>
                                    <label className="result-label">
                                        <a className="url" key={`${it}-${index}`} href={result[it]}> {it}</a> <br></br>
                                    </label>
                                </React.Fragment>
                            )
                        })}
                    </div>) : <p className="result"> No results yet! Please provide the files </p>
            }
            <a className="footer" href="https://www.linkedin.com/in/joaopedroflopes/">  <p> Developed by João Lopes </p> </a>
        </div >
    )

}

export default MainApp