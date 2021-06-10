package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class PlanoEstagio 
{
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nomeEstagiario;
	
	private String nomeCurso;
	
	private String nomeOrientador;
	
	private String area;
	
	private String objetivo;
	
	private String nomeSupervisor;
	
	private String descricaoAtividade;
	
}
