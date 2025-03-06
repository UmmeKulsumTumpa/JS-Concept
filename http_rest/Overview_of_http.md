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
- **Forward Proxy**: Forwards requests from and to anywhere on the internet. also called as tunnel or gateways
<img src="images/forward-proxy.png" alt="forward-proxy" width="500" height="300">

- **Reverse Proxy**: Takes requests from the internet and forwards them to the server through an internal network. (used to control and protect access to a server for load balancing, authetication, decryption or caching)
<img src="images/reverse-proxy.png" alt="reverse-proxy" width="500" height="300">

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

### 1. HTTP is Simple
- Simple and human-readable.
- **HTTP/2** encapsulates HTTP messages into **frames**.

### 2. HTTP is Extensible
- Can introduce new header functionality.
- Need to learn more about **HEADERS**.

### 3. HTTP is Stateless, but Not Sessionless
- **Stateless**: Two requests don’t need to be forwarded to the same server; any server having the requested document can respond.
- **Stateful**: However, being stateless may create issues, such as when you want to interact with pages coherently (e.g., an e-commerce shopping basket).
  
  - The core of HTTP is stateless, but **HTTP cookies** allow the use of stateful sessions.
  - By using HTTP header extensibility, we can add the **session cookie** to the workflow. This allows session creation on the HTTP request to share the same context.

### 4. HTTP and Connections

#### Connection Control
- The connection is controlled by the **transport layer**.
- HTTP requires a **reliable transport protocol** to ensure no messages are lost.
  - **TCP** (reliable)
  - **UDP** (unreliable)

#### HTTP's Reliance on TCP
- HTTP relies on **TCP standards**, and it is **connection-based**.
- Before an HTTP exchange, the client and server need to establish a **TCP connection**, which requires several round trips.

#### HTTP Versions and Connection Efficiency:
- **HTTP/1.0**: Creates a new TCP connection for each request, which is less efficient.
- **HTTP/1.1**: Introduced **pipelining** and **persistent connections**.
- **HTTP/2**: Uses **multiplexed messages** over a single connection.


# HTTP Versions and Their Evolution

### **HTTP/1.0** 
- **Message Queue Type**: Requests are added in a queue.
- If one request closes, the other can proceed.

<img src="images/http1.0.png" alt="reverse-proxy" width="500" height="300">

### **HTTP/1.1**
- **Pipelining**: Allows multiple requests to be sent in a single connection without waiting for each request to finish.
- However, a new problem may arise: **HOL (Head of Line) Blocking**.
  - **HOL Blocking** occurs when the number of parallel requests in the browser exceeds the limit. In this case, other requests need to wait for the former request to finish.

> Persistent Connection

#### 1. **Non-Pipelined Persistent Connection**
- In a **Non-pipelined connection**, the process is as follows:
  - First, we establish the connection, which takes **2 RTTs**.
  - Then, we send all the objects (such as images/text files), each of which takes **1 RTT**.
  - No **TCP connection** is required for each object(that is 3 way handshake)

#### 2. **Pipelined Persistent Connection**
- In a **Pipelined connection**, the process is as follows:
  - **2 RTTs** are required for connection establishment.
  - Then, only **1 RTT** (assuming no window limit) is needed for all the objects (i.e., images/text files) to be sent.

<img src="images/persistent_http.png" alt="reverse-proxy" width="500" height="300">

> so in short if we use pipeline, we need only TCP connection once then send all the object at a time. but without pipeline, we make TCP connection once, but we then send each object seperately.

### **HTTP/2.0**
- **Multiplexing**: Allows multiple requests and responses to be sent concurrently over a single connection, which eliminates HOL blocking at the **application layer**.
- However, **HOL blocking still exists** in the **Transport Layer** (TCP + TLS – Transport Layer Security).

### **HTTP/3**
- **UDP + QUIC** (didn’t go deep).

<img src="images/all_types_of_http.png" alt="reverse-proxy" width="500" height="300">

