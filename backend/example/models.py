from django.conf import settings
from django.db import models
class Example(models.Model):
    'Generated Model'
    name = models.BigIntegerField()
    rel_image_1_1 = models.OneToOneField("camera.Image",null=True,blank=True,on_delete=models.CASCADE,related_name="example_rel_image_1_1",)

# Create your models here.
