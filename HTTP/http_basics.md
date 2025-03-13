
# Uniform Resource Locator (URL)

A **URL (Uniform Resource Locator)** is used to uniquely identify a resource on the web. A URL has the following structure:

```
protocol://hostname:port/path-and-file-name
```

### Parts of a URL:

1. **Protocol**: The communication protocol used (e.g., HTTP, FTP, telnet).
2. **Hostname**: The domain name (e.g., `www.example.com`) or IP address (`192.168.1.1`).
3. **Port**: The TCP port number the server listens to (e.g., `80` for HTTP, `443` for HTTPS).
4. **Path-and-File-Name**: The location of the requested resource on the server.

### Example:

For the URL:  
`http://www.nowhere123.com/docs/index.html`

- **Protocol**: HTTP  
- **Hostname**: `www.nowhere123.com`  
- **Port**: Not specified (default is `80` for HTTP)  
- **Path and File Name**: `/docs/index.html`

### More Examples:

- `ftp://www.ftp.org/docs/test.txt` → FTP resource  
- `mailto:user@test101.com` → Email address  
- `news:soc.culture.Singapore` → Newsgroup  
- `telnet://www.nowhere123.com/` → Telnet session  


# HTTP Protocol

When you enter a URL in a browser, the browser creates a request message based on the **HTTP protocol** and sends it to the server.

For example, the URL `http://www.nowhere123.com/docs/index.html` is translated into:

```
GET /docs/index.html HTTP/1.1
Host: www.nowhere123.com
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
```

### How the Server Responds:
1. Finds and returns the requested file.
2. Executes a program and returns the output.
3. Sends an error message if the request cannot be fulfilled.

### Example of HTTP Response:

```
HTTP/1.1 200 OK
Date: Sun, 18 Oct 2009 08:56:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Sat, 20 Nov 2004 07:16:26 GMT
ETag: "10000000565a5-2c-3e94b66c2e680"
Accept-Ranges: bytes
Content-Length: 44
Connection: close
Content-Type: text/html
X-Pad: avoid browser bug

<html><body><h1>It works!</h1></body></html>
```

### How the Browser Handles the Response:
- Reads and interprets the response.
- Displays the content based on the **Content-Type** (e.g., `text/html`, `image/jpeg`, `application/pdf`).

### HTTP Server Behavior:
- The server **listens** for incoming requests.
- When a request arrives, it **analyzes** the headers and **applies rules** from its configuration.
- Webmasters control the server's actions through **configuration settings**.


# HTTP over TCP/IP

**HTTP** is a client-server protocol that usually runs over **TCP/IP**, but it can work with any reliable transport protocol.

## What is TCP/IP?
**TCP/IP (Transmission Control Protocol/Internet Protocol)** is a set of network and transport protocols that allow machines to communicate over a network.

### 1. **Internet Protocol (IP)**
- IP is a **network-layer protocol** responsible for addressing and routing.
- Each machine has a **unique IP address** (e.g., `165.1.2.3` for IPv4).
- IPv4 uses **4 bytes (0-255 each)**, written in **dotted-decimal** format.
- IPv6 supports more addresses.
- **DNS (Domain Name System)** translates human-readable names (e.g., `www.example.com`) to IP addresses.
- The special IP `127.0.0.1` (or **localhost**) refers to your own machine.

### 2. **Transmission Control Protocol (TCP)**
- TCP is a **transport-layer protocol** that ensures **reliable communication**.
- It assigns a **sequence number** to each packet and requires an acknowledgment.
- If a packet is lost, TCP **resends** it.
- **UDP (User Datagram Protocol)** is another transport protocol but **does not guarantee delivery** (used for streaming audio/video).

### 3. **Ports in TCP**
- TCP supports **65536 ports (0-65535)** per IP address.
- Common **pre-assigned ports**:
  - HTTP: **80**
  - HTTPS: **443**
  - FTP: **21**
  - Telnet: **23**
  - SMTP (Email): **25**
  - DNS: **53**
  - NNTP (News): **119**
- Ports **1024-65535** are available for custom applications.

### Running HTTP on Different Ports
- By default, HTTP runs on **port 80**.
- You can run an HTTP server on a different port (e.g., **8000, 8080**) for testing.
- If a server listens on **port 8000**, the URL must specify it:  
  `http://www.example.com:8000/docs/index.html`

### Summary:
To communicate over TCP/IP, you need:
1. **An IP address or hostname**
2. **A port number**

