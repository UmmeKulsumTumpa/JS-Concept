# 🌐 An Overview of HTTP

## Client-Server Protocol
- **Requests** are initiated by the **client** and received by the **server**.
- **Request**: Message sent by the client.
- **Response**: Message sent by the server as an answer to the request.

---

# Components of HTTP-based System

### HTTP is a Client-Server Protocol
- Between **client** and **server**, there are entities called **proxies** that act as both client and server.

### Types of Proxies:
- **Forward Proxy**: Forwards requests from and to anywhere on the internet.
- **Reverse Proxy**: Takes requests from the internet and forwards them to the server through an internal network.

### Proxy Computers
- Proxy computers (modem, routers, etc.) that stand between the client and server are **hidden** to the **network** and **transport layer**.
- **HTTP** is at the **top**, in the **application layer**.

---

### 👤 Client
- **User Agent**: Always initiates the request.

### 🌍 The Web Server
- Serves the documents as requested by the client.
- The web server can appear as a single machine, but it may also be a collection of servers (e.g., load balancing, caching servers, database servers, e-commerce servers, etc.).
- The server partially or totally processes the request initiated by the client based on demand.

### 🔄 Proxies
- **Transparent Proxy**: Forwards the request without altering it on the way.
- **Non-transparent Proxy**: Alters the request before passing it to the server.
  
**Proxies can perform tasks like**:
- **Caching**
- **Filtering**
- **Logging**
- **Load Balancing**
- **Authentication**

---

# 📝 Basic Aspects of HTTP

### HTTP is Simple
- Simple and human-readable.
- **HTTP/2** encapsulates HTTP messages into **frames**.

### HTTP is Extensible
- Can introduce new header functionality.
- Need to learn more about **HEADERS**.

### HTTP is Stateless, but Not Sessionless
- **Stateless**: Two requests don’t need to be forwarded to the same server; any server having the requested document can respond.
- **Stateful**: However, being stateless may create issues, such as when you want to interact with pages coherently (e.g., an e-commerce shopping basket).
  
  - The core of HTTP is stateless, but **HTTP cookies** allow the use of stateful sessions.
  - By using HTTP header extensibility, we can add the **session cookie** to the workflow. This allows session creation on the HTTP request to share the same context.

---

# HTTP and Connections

### Connection Control
- The connection is controlled by the **transport layer**.
- HTTP requires a **reliable transport protocol** to ensure no messages are lost.
  - **TCP** (reliable)
  - **UDP** (unreliable)

### HTTP's Reliance on TCP
- HTTP relies on **TCP standards**, and it is **connection-based**.
- Before an HTTP exchange, the client and server need to establish a **TCP connection**, which requires several round trips.

### HTTP Versions and Connection Efficiency:
- **HTTP/1.0**: Creates a new TCP connection for each request, which is less efficient.
- **HTTP/1.1**: Introduced **pipelining** and **persistent connections**.
- **HTTP/2**: Uses **multiplexed messages** over a single connection.

