<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>用户注册详情</title>
</head>
<body>
    <%
        request.setCharacterEncoding("utf-8");
        String text = (String)request.getParameter("fname");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text1 = (String)request.getParameter("input2");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text2 = (String)request.getParameter("area");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text3 = (String)request.getParameter("year");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text301 = (String)request.getParameter("month");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text302 = (String)request.getParameter("day");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text4 = (String)request.getParameter("sex");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text5 = (String)request.getParameter("hobby");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text6 = (String)request.getParameter("height");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text7 = (String)request.getParameter("email");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text8 = (String)request.getParameter("telephone");
    %>
    <%
        request.setCharacterEncoding("utf-8");
        String text9 = (String)request.getParameter("introduce");
    %>

</body>
</html>