package br.com.unifacisa.lti.sgra.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Curso 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nome;
	
	@OneToOne
	private Professor coordenador;

	@OneToMany(mappedBy = "curso")
	private List<Professor> professores = new ArrayList<>();
	
	@OneToMany(mappedBy = "curso")
	private List<Secretario> secretarios = new ArrayList<>();
}
