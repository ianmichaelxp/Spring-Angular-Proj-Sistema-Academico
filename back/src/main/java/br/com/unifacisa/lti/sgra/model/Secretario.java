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
public class Secretario 
{	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long matricula;
		
	@OneToOne
	private Usuario usuario;
	
	@ManyToOne
	private Curso curso;

}
