package br.com.unifacisa.lti.sgra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.unifacisa.lti.sgra.model.CadastroEstagio;

@Repository
public interface CadastroEstagioRepository extends JpaRepository<CadastroEstagio, Long>{

}