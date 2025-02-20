const projects = [
    { 
        title: "Itemfinder",
         desc: "Virtual lost and found office",
        tech: "JAVA | SPRING | HTML | CSS | JS | Thymeleaf | PostgeSQL",
           picture: "/assets/pictures/itemfinder3.png",
            long_desc: `
<p>
    A <strong>self-hosted web platform</strong> for reporting, browsing, and coordinating lost & found items 
    with authentication, an interactive map, and messaging.    <strong>  Core Features: </strong>
</p>
<ul>
    <li> <strong>Authentication:</strong> Secure login with hashed passwords, role-based access.</li>
    <li><strong>Listings:</strong> Post items with images, descriptions, and mapped locations (<strong>Leaflet + OpenStreetMap</strong>).</li>
    <li><strong>Messaging:</strong> Direct communication stored in a <strong>PostgreSQL database</strong>.</li>
    <li><strong>Multilingual:</strong> Language management via <strong>Spring messages.properties</strong>.</li>
</ul>
            `,


               
              
               links: [
                {url: "https://github.com/Greenn3/itemfinder", logo:"/assets/pictures/github2.png", desc_tooltip: "Github repo"},
                {url: "https://itemfinder.net/", logo:"/assets/pictures/web-app.png", desc_tooltip: "The app"},
                {url: "https://info.itemfinder.net/", logo:"/assets/pictures/web-site.png", desc_tooltip: "Info website"},
               ]
               
            },


     { title: "Lodgify", desc: "A simple PMS for accommodations", tech: "JAVA | SPRING | JAVAFX | MySQL | Hibernate | JPA", picture: "/assets/pictures/lodgify.png",
            long_desc:`
            

<p>
    <strong>A client-server application</strong> designed for a prticular accommodation facility, managing 
    <strong>reservations, pricing, and billing</strong>. The desktop client interacts with a backend for 
    real-time data processing and structured data management, it features:
</p>
<ul>
    <li> <strong>Reservation Management:</strong> Availability checks and booking system for accommodations.</li>
    <li><strong>Dynamic Pricing:</strong> Adjusts prices based on stay period and accommodation type.</li>
    <li><strong>Automated PDF Generation:</strong> Creates confirmations and invoices for bookings.</li>
</ul>`,

            links: [
               {url: "https://github.com/Greenn3/demosystemFront", logo: "/assets/pictures/github2.png", desc_tooltip: "Desktop app Github repo"},
               {url: "https://github.com/Greenn3/ServerSide", logo: "/assets/pictures/github2.png", desc_tooltip: "Server app Github repo"}
              
            ]
         },

    { title: "Neural Network", desc: "Basic AI model", tech: "Java | JavaFX", picture: "/assets/pictures/neural-network.png",
    long_desc:`
   <p>
    A <strong>simple feedforward neural network</strong> that classifies handwritten letters (A–J) 
    from a <strong>6x10 pixel grid</strong>. Built from scratch to understand neural networks without external ML libraries. 
  
</p>
  <strong>Core Features:</strong>
<ul>
    <li><strong>Architecture:</strong> Single hidden layer with supervised learning.</li>
    <li><strong>Training:</strong> Backpropagation with adjustable learning rate.</li>
    <li><strong>Dataset:</strong> Handcrafted training samples stored as binary matrices.</li>
    <li><strong>Planned Improvements:</strong> UI controls for dataset selection and epoch settings.</li>
</ul>

`,
links:[
   {url: "https://github.com/Greenn3/NeuralNetwork", logo: "/assets/pictures/github2.png", desc_tooltip: "Github repo"},
]

},

    { title: "2048", desc: "Classic puzzle game", tech: "Kotlin | ComposeForWeb",picture: "/assets/pictures/2048.png",
long_desc: `
<p>
    A <strong>browser-based sliding tile puzzle</strong> where players combine numbered tiles to reach 2048. 
    Implements game logic, dynamic scoring, and local storage. 
   
</p>
 <strong>Core Features:</strong>
<ul>
    <li><strong>Controls:</strong> Keyboard and touch support.</li>
    <li><strong>Game Logic:</strong> Tile merging, random tile generation, win/loss detection.</li>
    <li><strong>Persistence:</strong> High scores stored in local storage.</li>
    <li><strong>Replayability:</strong> Reset function for new game rounds.</li>
</ul>

`,
links:[
{url: "https://github.com/Greenn3/2048", logo: "/assets/pictures/github2.png", desc_tooltip: "Github repo"},
{url:"https://greenn3.github.io/2048/", logo:"/assets/pictures/game-icon.png", desc_tooltip: "Play now"}
]

     },

    { title: "Minesweeper", desc: "Classic game recreation", tech: "Kotlin | ComposeForWeb",picture: "/assets/pictures/Minesweeper.png",
    long_desc:  
    `
   <p>
    A <strong>grid-based logic game</strong> where players uncover safe cells while avoiding hidden mines. 
    Features dynamic mine counts, flagging, and recursive clearing. 
</p>
 <strong>Core Features:</strong>
<ul>
    <li><strong>Game Mechanics:</strong> Flag/explore mode, mine counter updates.</li>
    <li><strong>Logic Implementation:</strong> Recursive zero-clear, neighboring mine detection.</li>
    <li><strong>Win/Loss Conditions:</strong> Automatic game-over detection.</li>
    <li><strong>Replayability:</strong> Reset function regenerates the minefield.</li>
</ul>
       `,

       links:[
         {url: "https://github.com/Greenn3/Minesweeper2", logo: "/assets/pictures/github2.png", desc_tooltip: "Github repo"},
         {url:"https://greenn3.github.io/Minesweeper2/", logo:"/assets/pictures/game-icon.png", desc_tooltip: "Play now"}
       ]
     },

   //  { title: "ProjectCrypto", desc: "Cryptocurrency tracking app", tech: "React | Node.js", picture: "/assets/pictures/dummy.png" },

   //  { title: "Itemfinder", desc: "Virtual lost and found office", tech: "JAVA | SPRING | HTML", picture: "/assets/pictures/dummy.png" },

   //  { title: "Lodgify", desc: "A simple PMS for accommodations", tech: "JAVA | SPRING | JAVAFX", picture: "/assets/pictures/dummy.png" },

   //  { title: "Neural Network", desc: "Basic AI model", tech: "Python | TensorFlow", picture: "/assets/pictures/dummy.png" },

   //  { title: "2048", desc: "Classic puzzle game", tech: "JavaScript | CSS | HTML", picture: "/assets/pictures/dummy.png" },

   //  { title: "Minesweeper", desc: "Classic game recreation", tech: "JavaScript | React", picture: "/assets/pictures/dummy.png" },

   //  { title: "ProjectCrypto", desc: "Cryptocurrency tracking app", tech: "React | Node.js", picture: "/assets/pictures/dummy.png" }

];
export default projects;