package com.loiane.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

/**
 * Controller - Spring
 * 
 * @author Loiane Groner
 */
public class MainController extends MultiActionController  {

	public ModelAndView main(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		return new ModelAndView("main.jsp");

	}

}
