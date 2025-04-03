'use client';

import { useState, useEffect } from 'react';

// Componente para integración con GitHub API
const GitHubIntegration = () => {
  const [repoData, setRepoData] = useState(null);
  const [contributionData, setContributionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch repositories data
        const reposResponse = await fetch('https://api.github.com/users/wisrovi/repos');
        if (!reposResponse.ok) {
          throw new Error('Error fetching GitHub repositories');
        }
        const reposData = await reposResponse.json();
        
        // Process repositories data
        const processedRepoData = {
          totalRepos: reposData.length,
          totalStars: reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          totalForks: reposData.reduce((sum, repo) => sum + repo.forks_count, 0),
          languages: {},
          topRepos: reposData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5)
            .map(repo => ({
              name: repo.name,
              description: repo.description,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              url: repo.html_url,
              language: repo.language
            }))
        };
        
        // Count languages
        reposData.forEach(repo => {
          if (repo.language) {
            processedRepoData.languages[repo.language] = 
              (processedRepoData.languages[repo.language] || 0) + 1;
          }
        });
        
        setRepoData(processedRepoData);
        
        // Simulate contribution data (in a real implementation, this would use the GitHub GraphQL API)
        // Note: GitHub's API doesn't directly expose contribution data through REST API
        const simulatedContributions = {
          totalContributions: 827,
          lastYear: Array(52).fill(0).map(() => Math.floor(Math.random() * 10)),
          streak: 23,
          contributionsByRepo: [
            { repo: 'wyoloservice', count: 156 },
            { repo: 'wkafka', count: 89 },
            { repo: 'wmongo', count: 72 },
            { repo: 'wredis', count: 65 },
            { repo: 'api_face_recognition', count: 58 }
          ]
        };
        
        setContributionData(simulatedContributions);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchGitHubData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Actividad en GitHub
        </h2>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Actividad en GitHub
        </h2>
        <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-200">
          <p>No se pudo cargar la información de GitHub. Por favor, intenta más tarde.</p>
        </div>
      </div>
    );
  }
  
  // Render GitHub data
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Actividad en GitHub
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Repositorios</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{repoData.totalRepos}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Estrellas</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{repoData.totalStars}</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">Contribuciones</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{contributionData.totalContributions}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Repositorios Destacados
          </h3>
          <div className="space-y-4">
            {repoData.topRepos.map(repo => (
              <div key={repo.name} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-1">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.name}
                  </a>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {repo.description || 'Sin descripción'}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  {repo.language && (
                    <span className="flex items-center mr-4">
                      <span className={`w-3 h-3 rounded-full mr-1 ${
                        repo.language === 'Python' ? 'bg-blue-500' :
                        repo.language === 'JavaScript' ? 'bg-yellow-500' :
                        repo.language === 'TypeScript' ? 'bg-blue-400' :
                        repo.language === 'HTML' ? 'bg-red-500' :
                        repo.language === 'CSS' ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center mr-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {repo.stars}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {repo.forks}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Contribuciones
          </h3>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Actividad del último año
            </h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-hidden">
              <div className="flex flex-wrap gap-1">
                {contributionData.lastYear.map((count, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-sm ${
                      count === 0 ? 'bg-gray-200 dark:bg-gray-700' :
                      count < 3 ? 'bg-green-200 dark:bg-green-900' :
                      count < 6 ? 'bg-green-400 dark:bg-green-700' :
                      'bg-green-600 dark:bg-green-500'
                    }`}
                    title={`${count} contribuciones`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contribuciones por repositorio
            </h4>
            <div className="space-y-2">
              {contributionData.contributionsByRepo.map(item => (
                <div key={item.repo} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.repo}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.count} commits</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(item.count / contributionData.contributionsByRepo[0].count) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 text-center">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Racha actual de contribuciones
            </h4>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {contributionData.streak} días
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="https://github.com/wisrovi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          Ver perfil completo en GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubIntegration;
