package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Aluno 
{	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long matricula;
	
	@OneToOne
	private Curso curso;
	
	@OneToOne
	private Usuario usuario;
}
