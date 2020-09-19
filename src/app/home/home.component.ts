import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StorageService} from '../Servicios/storage.service'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUserSubscription: Subscription;

    user: any = undefined;

    constructor(
        private storage: StorageService
    ) {

    }

    ngOnInit() {

        this.user = JSON.parse(localStorage.getItem('_user'));
    }

    private loadAllUsers() {
    }
}