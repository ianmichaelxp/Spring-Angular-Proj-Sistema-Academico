package br.com.unifacisa.lti.sgra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.unifacisa.lti.sgra.model.Banca;

@Repository
public interface BancaRepository extends JpaRepository<Banca, Long>{

}