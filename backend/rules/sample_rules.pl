obligation(company, pay_tax).
obligation(company, submit_report).

compliant(company) :- obligation(company, pay_tax), obligation(company, submit_report).
obligation(employee, complete_training).
obligation(organization, protect_data).

compliant(employee) :- obligation(employee, complete_training).
compliant(organization) :- obligation(organization, protect_data).

obligation(recipient, disclosure).
obligation(company, data_protection).
compliant(Entity) :- obligation(Entity, Duty), fulfilled(Entity, Duty).
% Define duration facts
duration(confidentiality, 5).
duration(non_disclosure, 3).
