const projects = [
  {title: "Wind Turbine Control App Design (Python & JavaScript)",
    description: "Mainly using Python (FastAPI) & JavaScript (React Native) for implementation",
    imageUrl: "assets/img/ai-wallpaper-1.jpg",
    },
  {title: "News Catagories Calssifier (Python)",
    description: "Built a bidirectional LSTM model to classify news categories, and trained it with data processed by Pandas, NumPy, PyTorch, etc. Final test accuracy could reach around 90%.",
    imageUrl: "assets/img/2373842_a332_2.jpg",
    },
];
let projectIndex =0;
const projectsPerLoad =1;





function displayProjects(index, count) {
  const recentProjectsDiv = document.getElementById('recent-projects');
  
  for (let i = index; i < index + count && i < projects.length; i++) {
      const project =projects[i];
    const projectDiv =document.createElement('div');


// function displayProjects(index, count) {
//   const recentProjectsDiv = document.getElementById('recent-projects');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
      <img src="${project.imageUrl}" alt="${project.title}" style="height: 100%; width: 100%">
      </div>
      <div class="card-content">
      <span class="card-title teal-text">${project.title}</span>
      <p>${project.description}</p>
      </div>
    </div>
    `;
    recentProjectsDiv.appendChild(projectDiv);
  }
  projectIndex+= count;
  
  if(projectIndex >= projects.length) 
    {
      document.getElementById('load-more-btn').style.display = 'none';
    }
  }
  
window.onload = () => {
  displayProjects(projectIndex, projectsPerLoad);
  };
  


function loadMoreProjects() {
    displayProjects(projectIndex, projectsPerLoad);
  }
