package com.loiane.security;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.springframework.security.Authentication;
import org.springframework.security.AuthenticationException;
import org.springframework.security.ui.webapp.AuthenticationProcessingFilter;

public class MyAuthenticationProcessingFilter extends AuthenticationProcessingFilter {

	protected void onSuccessfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, Authentication authResult)
	throws IOException {
		super.onSuccessfulAuthentication(request, response, authResult);

		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);

		Writer out = responseWrapper.getWriter();

		String targetUrl = determineTargetUrl( request );
		out.write("{success:true, targetUrl : \'" + targetUrl + "\'}");
		out.close();

	}

	protected void onUnsuccessfulAuthentication( HttpServletRequest request,
			HttpServletResponse response, AuthenticationException failed )
	throws IOException {

		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response);

		Writer out = responseWrapper.getWriter();

		out.write("{ success: false, errors: { reason: 'Login failed. Try again.' }}");
		out.close();

	}

}

