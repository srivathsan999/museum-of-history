// Blog content data with proper CSS styling
const blogData = {
    mesopotamia: {
        title: "Uncovering Ancient Secrets: New Discoveries in Mesopotamia",
        date: "January 10, 2026",
        image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
        content: `
            <p class="lead mb-6" style="font-size: 1.25rem; line-height: 1.75;">Recent archaeological findings in Mesopotamia have shed new light on the foundations of human civilization, revealing fascinating insights into daily life, governance, and innovation in the ancient world.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">The Cradle of Civilization</h2>
            <p class="mb-4">Mesopotamia, often called the "Cradle of Civilization," continues to surprise researchers with its rich archaeological treasures. Recent excavations have uncovered remarkable artifacts that challenge our understanding of early human societies.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">Key Discoveries</h2>
            <p class="mb-4">Among the most significant finds are clay tablets containing administrative records, personal letters, and literary works. These documents provide unprecedented insights into the social structure, economic systems, and cultural practices of ancient Mesopotamian societies.</p>
            
            <p class="mb-4">Archaeologists have also discovered advanced irrigation systems, demonstrating the sophisticated engineering capabilities of these early civilizations. These findings highlight how ancient peoples managed water resources in an arid environment, enabling the growth of agriculture and urban centers.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">Impact on Modern Understanding</h2>
            <p class="mb-4">These discoveries are reshaping our understanding of human history. They reveal that many innovations we consider modern—such as writing, law codes, and urban planning—have roots stretching back thousands of years to the fertile crescent.</p>
            
            <p class="mb-4">The artifacts and structures uncovered continue to inform our knowledge of how early societies organized themselves, traded with neighbors, and developed the cultural foundations that would influence civilizations for millennia to come.</p>
        `
    },
    preservation: {
        title: "The Art of Preservation: Caring for Historical Documents",
        date: "January 5, 2026",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=80",
        content: `
            <p class="lead mb-6" style="font-size: 1.25rem; line-height: 1.75;">Preserving historical documents is both an art and a science, requiring specialized knowledge, careful handling, and cutting-edge technology to protect our written heritage for future generations.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">The Challenge of Time</h2>
            <p class="mb-4">Historical documents face numerous threats: environmental factors like humidity and temperature, chemical degradation of paper and ink, physical damage from handling, and biological threats such as mold and insects. Each type of document requires specific preservation strategies.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">Modern Preservation Techniques</h2>
            <p class="mb-4">Today's conservators employ a range of sophisticated techniques to preserve fragile manuscripts. Climate-controlled storage facilities maintain optimal temperature and humidity levels. Advanced cleaning methods remove dirt and pollutants without damaging delicate materials.</p>
            
            <p class="mb-4">Digital preservation has become increasingly important, allowing institutions to create high-resolution copies of documents while minimizing handling of originals. These digital archives ensure that even if physical documents deteriorate, their content remains accessible to researchers and the public.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">The Human Element</h2>
            <p class="mb-4">Behind every preserved document is a team of dedicated professionals—conservators, archivists, and specialists—who work tirelessly to protect our documentary heritage. Their expertise combines traditional craftsmanship with modern scientific knowledge.</p>
            
            <p class="mb-4">The work of preservation is never truly complete. As new threats emerge and technologies evolve, conservators must continuously adapt their methods to ensure that future generations can access and learn from the written records of the past.</p>
        `
    },
    medieval: {
        title: "Medieval Manuscripts: A Window into the Past",
        date: "December 28, 2025",
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=1200&q=80",
        content: `
            <p class="lead mb-6" style="font-size: 1.25rem; line-height: 1.75;">Medieval manuscripts represent some of the most beautiful and historically significant artifacts from the Middle Ages, combining artistic excellence with scholarly knowledge in stunning illuminated pages.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">The Art of Illumination</h2>
            <p class="mb-4">Medieval manuscript illumination was a highly specialized craft practiced by skilled artisans in monasteries and secular workshops. These illuminators used precious materials—gold leaf, lapis lazuli, and vibrant pigments—to create intricate decorations, elaborate initials, and detailed miniature paintings.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">Cultural Significance</h2>
            <p class="mb-4">These manuscripts served multiple purposes beyond mere text preservation. They were symbols of wealth and power, tools for religious devotion, and repositories of knowledge. The decoration and quality of a manuscript often reflected the status of its patron and the importance of its contents.</p>
            
            <p class="mb-4">Religious texts, such as Books of Hours and illuminated Bibles, were among the most lavishly decorated manuscripts. However, secular works—including histories, romances, and scientific treatises—also received elaborate illumination, demonstrating the broad cultural importance of these works.</p>
            
            <h2 class="text-3xl mb-4 mt-8" style="font-family: 'Libre Baskerville', serif; color: var(--text-primary);">Legacy and Influence</h2>
            <p class="mb-4">The tradition of manuscript illumination represents a crucial link between ancient and modern book culture. These works influenced the development of printing, typography, and book design. Today, they continue to inspire artists and designers while providing invaluable insights into medieval life, thought, and artistic achievement.</p>
            
            <p class="mb-4">Studying these manuscripts reveals not only the texts they contain but also information about medieval society, from the materials and techniques used in their creation to the subjects deemed worthy of such elaborate treatment.</p>
        `
    }
};

// Load blog content based on URL parameter
function loadBlogContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 'mesopotamia'; // Default to first blog

    const blog = blogData[blogId];

    if (blog) {
        document.getElementById('blog-title').textContent = blog.title;
        document.getElementById('blog-date').textContent = blog.date;
        document.getElementById('blog-image').src = blog.image;
        document.getElementById('blog-content').innerHTML = blog.content;
        document.title = blog.title + ' - The Heritage Museum';
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadBlogContent);
