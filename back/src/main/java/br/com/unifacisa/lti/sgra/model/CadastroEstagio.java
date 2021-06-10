package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import br.com.unifacisa.lti.sgra.model.enums.Status;
import lombok.Data;

@Data
@Entity
public class CadastroEstagio {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private Estagio estagio; 
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@OneToOne
	private Aluno aluno;
	
	@OneToOne
	private Professor orientador;

}
