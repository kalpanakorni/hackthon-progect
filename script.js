document.addEventListener('DOMContentLoaded', function() {
    // Demo functionality
    const submitBtn = document.getElementById('submit-btn');
    const userInput = document.getElementById('user-input');
    const imageUpload = document.getElementById('image-upload');
    const demoOutput = document.getElementById('demo-output');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', async function() {
            const text = userInput.value;
            const imageFile = imageUpload.files[0];
            
            if (!text && !imageFile) {
                demoOutput.innerHTML = '<p>Please enter text or upload an image</p>';
                return;
            }
            
            demoOutput.innerHTML = '<p>Processing with Groq...</p>';
            
            try {
                // This is where you would call your Groq API
                // For the hackathon demo, you might want to simulate this
                // or connect to your actual backend
                
                // Simulate API call
                setTimeout(() => {
                    // Replace with actual API response handling
                    demoOutput.innerHTML = `
                        <h3>Results</h3>
                        <p>Input processed successfully with Groq!</p>
                        <div class="result">
                            <p>Here would be your actual multimodal output combining:</p>
                            <ul>
                                ${text ? `<li>Text: ${text}</li>` : ''}
                                ${imageFile ? `<li>Image: ${imageFile.name}</li>` : ''}
                            </ul>
                            <p>Actual implementation would show processed results from Groq.</p>
                        </div>
                    `;
                }, 1500);
                
                // Actual implementation might look like:
                /*
                const formData = new FormData();
                if (text) formData.append('text', text);
                if (imageFile) formData.append('image', imageFile);
                
                const response = await fetch('your-backend-endpoint', {
                    method: 'POST',
                    body: formData
                });
                
                const results = await response.json();
                displayResults(results);
                */
                
            } catch (error) {
                demoOutput.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            }
        });
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to display actual results from Groq API
function displayResults(data) {
    const demoOutput = document.getElementById('demo-output');
    // Customize this based on your actual response structure
    demoOutput.innerHTML = `
        <h3>Results</h3>
        <div class="result">
            <p>${data.result}</p>
            ${data.imageResult ? `<img src="${data.imageResult}" alt="Processed output">` : ''}
        </div>
    `;
}
