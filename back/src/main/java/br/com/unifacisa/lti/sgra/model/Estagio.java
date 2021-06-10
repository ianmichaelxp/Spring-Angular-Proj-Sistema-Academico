package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Estagio 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String empresa;
	
	@OneToOne
	private PlanoEstagio plano;
	
	private String relatorio;
}
