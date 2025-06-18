fetch('/api/profile')
  .then(res => res.json())
  .then(profile => {
    document.getElementById('profile').innerHTML = `
      <img src="${profile.avatar}" alt="Profile" style="border-radius:50%; width:120px;">
      <h2>${profile.name}</h2>
      <p>${profile.bio}</p>
    `;
  });

fetch('/api/experience')
  .then(res => res.json())
  .then(experiences => {
    const expDiv = document.getElementById('experience');
    expDiv.innerHTML = '<h2>Experience</h2>';
    experiences.forEach(exp => {
      expDiv.innerHTML += `
        <div>
          <strong>${exp.company}</strong> - ${exp.role} <span>(${exp.years})</span>
        </div>
      `;
    });
  });
fetch('/api/projects')
  .then(res => res.json())
  .then(projects => {
    const projDiv = document.getElementById('projects');
    projDiv.innerHTML = '<h2>Projects</h2>';
    projects.forEach(proj => {
      projDiv.innerHTML += `
        <div>
          <strong>${proj.name}</strong>: ${proj.description}
          ${proj.link ? `<a href="${proj.link}" target="_blank">View</a>` : ''}
        </div>
      `;
    });
  });