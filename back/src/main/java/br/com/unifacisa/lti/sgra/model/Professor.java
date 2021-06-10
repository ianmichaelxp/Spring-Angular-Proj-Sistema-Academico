package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Professor 
{	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long matricula;
	
	@ManyToOne
	private Curso curso;
	
	@OneToOne
	private Usuario usuario;


}
