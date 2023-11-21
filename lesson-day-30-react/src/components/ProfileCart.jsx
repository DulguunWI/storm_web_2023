export default function ProfileCart() {
    return (
        <div className="bg-color-blue w-300  scroll-p-0 text-center rounded-xl shadow-inherit">
            <img src="/profile-picture.jpg" alt="Your Name" class="profile-img" />
            <h1>Dulmaa</h1>
            <p>Dentist</p>
            <div className="text-blue">
                <p><strong>About me;</strong> 5 years in clinic</p>
                <p><strong>Skills;</strong> Skill 1ss, Skill 2, Skill 3</p>
                <p><strong>Contact;</strong> <a className="decoration-1" >icodedulguun@gmail.com</a></p>
            </div>
        </div>
    );
};