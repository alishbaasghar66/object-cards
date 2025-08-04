let students = [
            {
                name: "Ayesha Asghar",
                age: 20,
                course: "Web development",
                email: "ayeshh7766@gmail.com",
                image: "https://sp.yimg.com/ib/th/id/OIP.VN81Z4cZ2qhz0TK1pw9wxAAAAA?pid=Api&w=148&h=148&c=7&rs=1",
                
            },
            {
                name: "Alishba Asghar",
                age: 19,
                course: "Graphic designer",
                email: "ayeshh7766@gmail.com",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&fit=facearea&facepad=3",
             
            },
            {
                name: "Sadaf Aslam",
                age: 20,
                course: "AI Data Science",
                email: "ayeshh7766@gmail.com",
                image: "https://sp.yimg.com/ib/th/id/OIP.xi_2PXTJMe6S3kAyA60UaAAAAA?pid=Api&w=148&h=148&c=7&rs=1",
                
            }
        ];

        
        function generateStudentCards() {
            let container = document.getElementById('students-container');
            container.innerHTML = '';
            
            students.forEach(student => {
                let col = document.createElement('div');
                col.className = 'col';
                
                let card = document.createElement('div');
                card.className = 'profile-card h-100';
                
                card.innerHTML = `
                    <div class="profile-image-container">
                        <img src="${student.image}" alt="${student.name}" class="profile-image">
                        <span class="profile-badge">${student.status}</span>
                    </div>
                    <div class="profile-content">
                        <h3 class="profile-title">${student.name}</h3>
                        
                        <div class="profile-info">
                            <i class="fas fa-user-graduate"></i>
                            <div>
                                <div class="info-label">Age</div>
                                <div class="info-value">${student.age} years</div>
                            </div>
                        </div>
                        
                        <div class="profile-info">
                            <i class="fas fa-book"></i>
                            <div>
                                <div class="info-label">Program</div>
                                <div class="info-value">${student.course}</div>
                            </div>
                        </div>
                        
                        <div class="profile-info">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <div class="info-label">Email</div>
                                <div class="info-value profile-email">${student.email}</div>
                            </div>
                        </div>
                    </div>
                `;
                
                col.appendChild(card);
                container.appendChild(col);
            });
        }

       
        document.addEventListener('DOMContentLoaded', () => {
            generateStudentCards();
        });