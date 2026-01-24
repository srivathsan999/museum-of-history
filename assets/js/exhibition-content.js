// Exhibition content data
const exhibitionData = {
    ancient: {
        title: "Ancient Civilizations",
        status: "Current Exhibition",
        duration: "Through March 2026",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
        description: "Journey through the ancient world and discover the foundation of human civilization.",
        content: `
            <p class="lead">Explore the remarkable achievements of ancient civilizations that laid the groundwork for modern society, from the pyramids of Egypt to the philosophical traditions of Greece and Rome.</p>
            
            <h2>Exhibition Highlights</h2>
            <p>This comprehensive exhibition features artifacts from multiple ancient civilizations, including Mesopotamia, Egypt, Greece, Rome, and the Indus Valley. Visitors will encounter authentic pottery, sculptures, tools, and inscriptions that tell the story of humanity's earliest organized societies.</p>
            
            <h2>Featured Artifacts</h2>
            <ul>
                <li>Cuneiform tablets from ancient Mesopotamia</li>
                <li>Egyptian funerary objects and hieroglyphic inscriptions</li>
                <li>Greek pottery and sculpture</li>
                <li>Roman coins and architectural fragments</li>
                <li>Indus Valley seals and terracotta figurines</li>
            </ul>
            
            <h2>Educational Programs</h2>
            <p>Join our expert-led tours every Saturday at 2 PM, or participate in hands-on workshops where you can learn ancient writing systems and crafts. School groups can book special educational sessions tailored to curriculum requirements.</p>
        `
    },
    medieval: {
        title: "Medieval Art & Culture",
        status: "Current Exhibition",
        duration: "Through May 2026",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
        description: "Explore the artistic and cultural achievements of the medieval period.",
        content: `
            <p class="lead">Immerse yourself in the rich tapestry of medieval life through stunning illuminated manuscripts, religious art, and artifacts that reveal the complexity of this often-misunderstood era.</p>
            
            <h2>The Medieval World</h2>
            <p>The Middle Ages spanned roughly 1,000 years, from the fall of Rome to the Renaissance. This exhibition showcases the artistic, intellectual, and cultural achievements that flourished during this transformative period in European history.</p>
            
            <h2>Exhibition Sections</h2>
            <ul>
                <li><strong>Religious Life:</strong> Illuminated manuscripts, reliquaries, and devotional objects</li>
                <li><strong>Courtly Culture:</strong> Tapestries, armor, and objects from noble households</li>
                <li><strong>Daily Life:</strong> Tools, pottery, and household items from medieval towns</li>
                <li><strong>Art and Architecture:</strong> Architectural fragments and sculptural works</li>
            </ul>
            
            <h2>Special Events</h2>
            <p>Experience medieval music performances on period instruments, attend lectures on medieval history, and participate in calligraphy workshops using traditional techniques.</p>
        `
    },
    modern: {
        title: "Modern History",
        status: "Upcoming Exhibition",
        duration: "Opening April 2026",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&q=80",
        description: "Discover the events and movements that shaped the modern world.",
        content: `
            <p class="lead">From the Industrial Revolution to the Digital Age, explore the transformative events, innovations, and social movements that created the world we live in today.</p>
            
            <h2>Coming Soon</h2>
            <p>This upcoming exhibition will examine the major developments of the 19th, 20th, and 21st centuries, exploring how technological innovation, political upheaval, and social change have shaped contemporary society.</p>
            
            <h2>Exhibition Themes</h2>
            <ul>
                <li><strong>Industrial Revolution:</strong> The transformation of manufacturing and society</li>
                <li><strong>Age of Empire:</strong> Colonialism and its global impact</li>
                <li><strong>World Wars:</strong> Conflict and its consequences</li>
                <li><strong>Civil Rights:</strong> Movements for equality and justice</li>
                <li><strong>Digital Revolution:</strong> Technology and the information age</li>
            </ul>
            
            <h2>Pre-Opening Events</h2>
            <p>Join us for preview lectures and discussions starting in March. Members will receive early access to the exhibition before the public opening.</p>
        `
    },
    regional: {
        title: "Regional History",
        status: "Permanent Collection",
        duration: "Always on Display",
        image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=1200&q=80",
        description: "A comprehensive look at the history of our region from ancient times to present.",
        content: `
            <p class="lead">Discover the rich and diverse history of our region, from its earliest inhabitants through colonial times to the vibrant community of today.</p>
            
            <h2>Our Story</h2>
            <p>This permanent exhibition tells the story of our region through artifacts, photographs, documents, and interactive displays. Learn about the indigenous peoples who first called this area home, the waves of settlement and immigration, and the economic and cultural developments that shaped our community.</p>
            
            <h2>Collection Highlights</h2>
            <ul>
                <li>Indigenous artifacts and cultural objects</li>
                <li>Colonial-era documents and household items</li>
                <li>Industrial age machinery and tools</li>
                <li>Photographs documenting community life</li>
                <li>Personal stories from local residents</li>
            </ul>
            
            <h2>Community Connections</h2>
            <p>This exhibition was created in partnership with local community members, historical societies, and indigenous groups. It represents an ongoing effort to document and preserve our shared heritage.</p>
            
            <p>We regularly update the exhibition with new acquisitions and stories. If you have artifacts or memories to share, please contact our collections department.</p>
        `
    },
    worldwars: {
        title: "World Wars Collection",
        status: "Current Exhibition",
        duration: "Through June 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        description: "Artifacts and stories from the World Wars that changed the course of history.",
        content: `
            <p class="lead">Experience the profound impact of the World Wars through personal stories, military artifacts, and historical documents that reveal the human cost and global transformation of these conflicts.</p>
            
            <h2>A Global Conflict</h2>
            <p>The two World Wars of the 20th century reshaped the political, social, and economic landscape of the entire world. This exhibition examines both the military and home front experiences, highlighting personal stories alongside major historical events.</p>
            
            <h2>Exhibition Features</h2>
            <ul>
                <li><strong>Military Equipment:</strong> Uniforms, weapons, and field equipment</li>
                <li><strong>Personal Stories:</strong> Letters, diaries, and photographs from soldiers and civilians</li>
                <li><strong>Home Front:</strong> Rationing, propaganda, and civilian life during wartime</li>
                <li><strong>Technology:</strong> Innovations driven by military necessity</li>
                <li><strong>Aftermath:</strong> The lasting impact on society and international relations</li>
            </ul>
            
            <h2>Educational Resources</h2>
            <p>Veterans and historians lead special tours sharing firsthand accounts and expert analysis. Educational materials are available for students and researchers.</p>
        `
    },
    renaissance: {
        title: "The Renaissance Era",
        status: "Upcoming Exhibition",
        duration: "Opening July 2026",
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&q=80",
        description: "Celebrate the rebirth of art, science, and culture during the Renaissance.",
        content: `
            <p class="lead">Step into the Renaissance, a period of extraordinary cultural flowering that transformed European art, science, philosophy, and society, creating foundations for the modern world.</p>
            
            <h2>The Rebirth of Classical Learning</h2>
            <p>The Renaissance, meaning "rebirth," marked a renewed interest in classical Greek and Roman culture. This exhibition will showcase how this revival sparked innovations in art, architecture, science, and humanistic thought.</p>
            
            <h2>Planned Exhibition Sections</h2>
            <ul>
                <li><strong>Artistic Revolution:</strong> Paintings, sculptures, and drawings demonstrating new techniques</li>
                <li><strong>Scientific Discovery:</strong> Instruments, manuscripts, and models from the age of exploration</li>
                <li><strong>Humanist Philosophy:</strong> Books and documents reflecting new ways of thinking</li>
                <li><strong>Daily Life:</strong> Objects showing how Renaissance ideas affected everyday existence</li>
                <li><strong>Global Connections:</strong> Trade, exploration, and cultural exchange</li>
            </ul>
            
            <h2>Coming Attractions</h2>
            <p>This major exhibition will feature loans from international museums and private collections. Watch for announcements about opening celebrations, lectures, and special programming.</p>
        `
    }
};

// Load exhibition content based on URL parameter
function loadExhibitionContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const exhibitionId = urlParams.get('id') || 'ancient'; // Default to first exhibition

    const exhibition = exhibitionData[exhibitionId];

    if (exhibition) {
        document.getElementById('exhibition-title').textContent = exhibition.title;
        document.getElementById('exhibition-status').textContent = exhibition.status;
        document.getElementById('exhibition-duration').textContent = exhibition.duration;
        document.getElementById('exhibition-image').src = exhibition.image;
        document.getElementById('exhibition-description').textContent = exhibition.description;
        document.getElementById('exhibition-content').innerHTML = exhibition.content;
        document.title = exhibition.title + ' - The Heritage Museum';
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadExhibitionContent);
