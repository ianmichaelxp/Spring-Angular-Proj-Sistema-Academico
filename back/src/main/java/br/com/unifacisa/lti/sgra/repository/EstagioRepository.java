package br.com.unifacisa.lti.sgra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.unifacisa.lti.sgra.model.Estagio;

@Repository
public interface EstagioRepository extends JpaRepository<Estagio, Long>{

}