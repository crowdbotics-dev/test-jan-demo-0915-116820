# Generated by Django 3.2.20 on 2023-10-02 14:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('camera', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Example',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.BigIntegerField()),
                ('rel_image_1_1', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='example_rel_image_1_1', to='camera.image')),
            ],
        ),
    ]
