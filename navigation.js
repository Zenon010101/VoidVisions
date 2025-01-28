// define page content
const pages = {
    home: `
        <center>
            <h1>Welcome to</h1>
             <img src="VOID VISUALS.png" usemap="#VoidVision" alt="VoidVision">
        </center>
        <br> 
        <center>
        <h1> This is VOID</h1>
        </center>
        <center>
        <img src="VoidVision Logo.png" usemap="#VoidVision" alt="VoidVision">
        </center>
       
        
  
    `,
    contact: `
        <center>
            <h1>Contact Us</h1>
            <p>Email: voidvisualsph@gmail.com</p>
            <p>Phone: 0976 415 2432</p>
           
        </center>
    `,
    about: `
        <center>
            <h1>About VoidVisuals</h1>
            <p>I'm Zenon. The creator of VoidVisuals. I'm a student freelance editor.
            <br>
            <br>
            Your clips, our Vision.</p>
            <br>
            <h1> This is how VoidVisuals was created. </h1>
            <br>
            <p> If you are interested, please watch this video. </p>
             <video width="500" height="250" controls>
            <source src="THE CREATION OF VOID VISION.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        </center>
    `
};

// handling navigation
function navigate(page) {
    const contentDiv = document.getElementById('content');
    if (pages[page]) {
        contentDiv.innerHTML = pages[page];
        updateActiveLink(page);
    }
}

// update active link
function updateActiveLink(activePage) {
    const links = document.querySelectorAll('.topnav a');
    links.forEach(link => {
        if (link.getAttribute('href') === `#${activePage}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Load default page 
window.onload = () => navigate('home');
