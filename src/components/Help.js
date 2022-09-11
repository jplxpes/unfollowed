
import "../App.css"

const Help = ({ functionRef }) => {
    return (


        <div class="help-center">
            <h1 className="title"> UNFOLLOWED </h1>
            <a className="developed" href="https://www.linkedin.com/in/joaopedroflopes/">  <p> Developed by João Lopes </p> </a>


            <p>
                Welcome to the APP that allows you to check who's not following you back <br />
                This website was designed specifically with the purpose of not having to login with your credentials in a shady website everytime there's a need to check who's not following you back
            </p>
            <h2 class="title-sub"> How does it work </h2>
            <p> First, you will need to request your account information to Instagram <br /> If you don't know how to do it, you can learn it with the tutorial below </p>
            <a className="url" href="https://www.androidguys.com/tips-tools/get-instagram-data-report/"> How to request data from Instagram </a>

            <h2 class="title-sub"> How to find the needed files? </h2>
            <p> After receiving the file, all we need is the followers and following files in order to find who's not following you back <br /> The file that you will receive by Instagram is a .zip, after extracting it, you can simply navigate to the folder "followers_and_following" and find both files, namely followers.html and following.html. </p>

            <h2 class="title-sub"> Is this safe? </h2>
            <p> All the data your sending is completely harmless, so you can rest assured that your account is safe! <br />  The code (which is really simple btw), can be found below </p>
            <a className="url" href="https://www.androidguys.com/tips-tools/get-instagram-data-report/"> Git Repo </a>

            <br></br>
            <input value="Take me to the APP" className="submit-button" type="submit" onClick={() => functionRef(false)} />

            <a className="url" href="https://paypal.me/doublexdaggers?country.x=PT&locale.x=pt_PT"> Buy me a coffee  </a>
        </div>
    )

}

export default Help