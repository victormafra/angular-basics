import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { PeopleServiceService } from '../../people-service.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {
  @Input() id: number;

  peopleForm: FormGroup;
  pessoas: Array<Pessoa> = [];
  idsPessoas: Array<number> = [];

  constructor(
    protected $formBuilder: FormBuilder,
    protected $peopleService: PeopleServiceService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getPessoas();
    this.preencheFormulario();
    this.subscribeToId();
  }

  subscribeToId(): void {
    this.peopleForm.get('id').valueChanges.subscribe(novoId => {
      this.id = parseInt(novoId, 10);
      this.preencheFormulario();
    });
  }

  initializeForm(): void {
    this.peopleForm = this.$formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      height: ['', Validators.required]
    });
  }

  getPessoas() {
    this.$peopleService.getPessoas().subscribe(pessoas => {
      this.pessoas = pessoas;
      this.preencheIds();
    });
  }

  preencheIds(): void {
    this.idsPessoas = this.pessoas.map(pessoa => {
      return pessoa.id;
    });
    if (typeof this.id !== 'undefined') {
      this.peopleForm.patchValue({
        id: this.id
      });
    }
  }

  preencheFormulario(): void {
    const pessoa = this.$peopleService.getPessoa(this.id);
    if (typeof pessoa !== 'undefined') {
      this.peopleForm.patchValue({
        name: pessoa.name,
        height: pessoa.height
      });
    }
  }

  limparFormulario(): void {
    this.peopleForm.reset();
  }

  onSubmit(): void {
    const valoresDoFormulario = this.peopleForm.getRawValue();
    if (typeof this.id === 'number' && !isNaN(this.id)) {
      this.$peopleService.editarPessoa(valoresDoFormulario);
    } else {
      valoresDoFormulario.id = undefined;
      const novaPessoa = this.$peopleService.criarPessoa(valoresDoFormulario);
      this.id = novaPessoa.id;
    }


    this.getPessoas();
  }

}
