package br.com.unifacisa.lti.sgra.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.com.unifacisa.lti.sgra.model.enums.DiaSemana;
import lombok.Data;

@Data
@Entity
public class Disponibilidade 
{	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Enumerated(EnumType.STRING)
	private DiaSemana dia;
    
}
