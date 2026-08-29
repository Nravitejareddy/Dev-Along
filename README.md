# 🚀 Dev Along
### Real-Time Collaborative Coding Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)
![React](https://img.shields.io/badge/UI-React-61DAFB?logo=react)
![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?logo=supabase)
![Yjs](https://img.shields.io/badge/Realtime-Yjs-blue)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

Create a room, share the link, and code together instantly. No sign-up required. Dev Along is a browser-based collaborative coding platform designed for pair programming, technical interviews, mentoring sessions, and collaborative learning. It supports Python, JavaScript, C++, and Java with real-time synchronization and integrated code execution.

---

### 🌐 Live Demo

**https://dev-along.vercel.app/**

<p align="center">
  <video src="https://github.com/user-attachments/assets/cb5caf6a-aa3a-4447-b0da-2758f0d4198f" width="100%" autoplay loop muted controls playsinline></video>
</p>

---

### 🏗 System Architecture

```mermaid
flowchart LR

%% -------------------- USERS --------------------
Users([👥 Users])

%% -------------------- VERCEL --------------------
subgraph V["▲ Vercel"]
direction TB

    subgraph Next["Next.js App"]

        direction LR

        subgraph Frontend["🎨 Frontend"]
            direction TB
            React["⚛ React"]
            TSF["📘 TypeScript"]
        end

        subgraph Backend["⚙ Backend<br/>(Serverless Functions)"]
            direction TB
            TSB["📘 TypeScript API"]
        end

        Frontend -->|REST API| Backend

    end

end

%% -------------------- SERVICES --------------------

Realtime["🟢 Supabase<br/>⚡ Presence<br/>🟡 Yjs Broadcast"]

Runlet["💻 Runlet<br/>Remote Code Execution"]

%% -------------------- CONNECTIONS --------------------

Users -->|HTTPS| Frontend

Frontend <-->|WebSockets| Realtime

Backend -->|"REST API<br/>Execute Code"| Runlet

%% -------------------- COLORS --------------------

style V fill:#111827,stroke:#000,stroke-width:4px,color:#ffffff
style Next fill:#ffffff,stroke:#64748b,stroke-width:2px

style Frontend fill:#dbeafe,stroke:#2563eb,stroke-width:3px
style Backend fill:#fef3c7,stroke:#f59e0b,stroke-width:3px

style Users fill:#ecfccb,stroke:#65a30d,stroke-width:2px

style Realtime fill:#dcfce7,stroke:#16a34a,stroke-width:3px

style Runlet fill:#ede9fe,stroke:#7c3aed,stroke-width:3px

style React fill:#ffffff,stroke:#61dafb,stroke-width:2px
style TSF fill:#3178C6,color:#fff,stroke:#1e3a8a,stroke-width:2px
style TSB fill:#3178C6,color:#fff,stroke:#1e3a8a,stroke-width:2px

linkStyle 0 stroke:#2563eb,stroke-width:2px
linkStyle 1 stroke:#16a34a,stroke-width:2px
linkStyle 2 stroke:#f97316,stroke-width:2px
