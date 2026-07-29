import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, BookOpen, ExternalLink, RefreshCw, Code, User, Terminal } from 'lucide-react';
import { GitHubUser, GitHubRepo } from '../types';
import { soundFx } from '../utils/audio';

export const GitHubHub: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('/api/github/user'),
        fetch('/api/github/repos')
      ]);

      if (userRes.ok) {
        const userData = await userRes.json();
        setUser(userData);
      }
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        setRepos(reposData);
      }
    } catch (err: any) {
      console.error("Error loading GitHub data:", err);
      setError("Unable to sync live GitHub telemetry. Displaying cached repository data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 bg-transparent relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-emerald-500 mb-3 uppercase tracking-widest shadow-md">
              <Github className="w-3.5 h-3.5" />
              <span>Live Telemetry // GitHub Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              GITHUB <span className="text-emerald-500">DEVELOPER ACTIVITY</span>
            </h2>
            <p className="text-sm text-white/60 mt-1 font-light">
              Live sync with GitHub user <span className="text-emerald-500 font-mono">@AjiteshSinha17</span>
            </p>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              fetchGitHubData();
            }}
            disabled={loading}
            className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500 text-white hover:text-emerald-400 text-xs font-mono uppercase rounded transition-all flex items-center gap-2 self-start cursor-pointer shadow-md"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'SYNCING...' : 'REFRESH DATA'}</span>
          </button>
        </div>

        {/* User Stats Card */}
        {user && (
          <div className="glass-card glass-card-hover border-emerald-500/40 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-emerald-500 p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {user.name} <span className="text-emerald-500 text-sm font-mono font-normal">(@{user.login})</span>
                </h3>
                <p className="text-xs text-white/70 font-light mt-0.5">{user.bio}</p>
                <p className="font-mono text-[10px] text-white/40 mt-0.5">{user.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded text-center">
                <div className="text-emerald-500 font-bold text-lg">{user.public_repos}</div>
                <div className="text-white/40 text-[10px] uppercase">PUBLIC REPOS</div>
              </div>

              <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded text-center">
                <div className="text-emerald-500 font-bold text-lg">{user.followers}</div>
                <div className="text-white/40 text-[10px] uppercase">FOLLOWERS</div>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase rounded hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>OPEN PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs text-emerald-500 uppercase font-bold tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>PINNED & RECENT REPOSITORIES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-lg p-5 transition-all duration-300 space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2 uppercase tracking-tight">
                      <Code className="w-4 h-4 text-emerald-500" />
                      <span>{repo.name}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400" />
                  </div>

                  <p className="text-xs text-white/70 line-clamp-2 font-light">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[10px] text-white/40">
                  <span className="text-emerald-500 font-bold">{repo.language}</span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-emerald-500" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
