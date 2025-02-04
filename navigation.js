// define page content
const pages = {
    home: `
    <div class="container"><div class="line">
        
    </div></div>
        <center>
        <br>
            <h1>Welcome to</h1>
             <img class="a" src="VOID VISUALS.png" usemap="#VoidVision" alt="VoidVision">
        </center>
        <br> 
        <center>
        <h1> This is VOID</h1>
        </center>
        <center>
        <img class="b" src="Void.png" usemap="#VoidVision" alt="VoidVision">
        </center>
    `,
    samples: `
    <center>
        <h1>Samples</h1>
        <p>Here are some examples of our work:</p>
        <img src="sample1.png" alt="Sample 1" style="width: 300px; height: auto;">
        <img src="sample2.png" alt="Sample 2" style="width: 300px; height: auto;">
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
            <h1>About VoidVisions</h1>
            <p>I'm Zenon. The creator of VoidVisuals. I'm a student freelance editor.
            <br>
            <br>
            Your clips, our Vision.</p>
            <br>
            <h1> This is how VoidVisions was created. </h1>
            <br>
            <a href="https://www.facebook.com/share/v/15GTCUNisS/"> <img class="LinkVideo"src="VoidVision Logo.png" alt="Logo" style="width: 100px;height:100px;"></a>
            
        </center>
        <br>
        <br>
        <h1><strong> Visit my links </strong></h1>
        <ul>
            <li><a href="https://www.facebook.com/VoidVisionsPh"><img class="Facebook" src="fb.png" alt="Facebook" style="width:42px;height:42px;"> </a>Facebook </li>
            <br>
            <li><a href="https://www.instagram.com/voidvisionsph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img class="Instagram" src="ig.png" alt="Instagram" style="width:42px;height:42px;"> </a> Instagram</li>
        
        </ul>
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
