# Generated by Django 3.2.10 on 2022-04-26 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shiftan', '0002_auto_20220423_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='color',
            field=models.CharField(max_length=100, verbose_name='グループカラー'),
        ),
    ]