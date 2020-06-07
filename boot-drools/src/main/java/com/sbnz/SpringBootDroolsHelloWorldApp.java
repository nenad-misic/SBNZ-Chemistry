package com.sbnz;

import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.annotation.ApplicationScope;


@SpringBootApplication
public class SpringBootDroolsHelloWorldApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDroolsHelloWorldApp.class, args);

	}

	@Bean
	@ApplicationScope
	public KieContainer kieContainer() {
		KieServices ks = KieServices.Factory.get();
		KieContainer kieContainer = ks.newKieContainer(ks.newReleaseId("com.sbnzkjar", "sbnzkjar", "1.0-SNAPSHOT"));
		KieScanner kScanner = ks.newKieScanner(kieContainer);
		kScanner.start(10_000);
		return kieContainer;
	}


}
