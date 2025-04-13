import '../css/style.css'; // Tailwind styles
import '../components/navbar.js';
import '../components/footer.js';
// and so on...

document.getElementById('app').innerHTML = `
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-8">Welcome to StudyBuddy</h1>
    <!-- Load your pages/components dynamically here -->
  </div>
`;
